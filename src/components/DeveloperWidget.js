import React from 'react'
import { useQuery, gql } from '@apollo/client'
import LineChart from './LineChart'
// import { COMMIT_CONTRIBUTION_FRAGMENT } from '../queries/fragments'

const GITHUB_USER_INFO_QUERY = gql`
  query ($username: String!) {
    user(login: $username) {
      login
      avatarUrl
      bio
      followers {
        totalCount
      }
      following {
        totalCount
      }
      company
      location
      email
      websiteUrl
      repositories(last: 20) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          forkCount
          updatedAt
        }
      }
      pullRequests(last: 10, states: MERGED) {
        totalCount
        nodes {
          title
          url
          createdAt
          mergedAt
          repository {
            nameWithOwner
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
        commitContributionsByRepository(maxRepositories: 10) {
          repository {
            nameWithOwner
          }
          contributions(last: 4) {
            totalCount
            nodes {
              occurredAt
            }
          }
        }
      }
      organizations(last: 10) {
        totalCount
        nodes {
          login
        }
      }
    }
  }
`

const GithubUserInfo = ({ username }) => {
  const { loading, error, data } = useQuery(GITHUB_USER_INFO_QUERY, {
    variables: { username },
  })

  console.log("error")
  console.log(error)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  if (!data || !data.user) return null // check existence of data


  console.log("data")
  console.log(data)

  if (!data || !data.user) return null // check existence of data

  console.log('la data', data)

  const {
    login,
    avatarUrl,
    bio,
    followers,
    following,
    company,
    location,
    email,
    websiteUrl,
    repositories,
    pullRequests,
    contributionsCollection,
    organizations,
  } = data.user

  // Extract data for line chart
  const chartData = contributionsCollection.commitContributionsByRepository.map((repo) => {
    const name = repo.repository.nameWithOwner
    const totalCount = repo.contributions.totalCount
    const last4Months = repo.contributions.nodes.slice(-4)
    const chartData = last4Months.map((contribution) => ({
      date: contribution.occurredAt,
      [name]: contribution.occurredAt,
    }))
    return chartData
  })

  // Flatten chart data
  const flattenedChartData = chartData.reduce((acc, val) => acc.concat(val), [])
  const commitsData =
    data.user.contributionsCollection.contributionCalendar.weeks.slice(-16).map((week) =>
      week.contributionDays
        .slice(-7)
        .filter((day) => day != null)
        .map((day) => day.contributionCount),
    ) || []

  return (
    <>
      <iframe style={{height: '500px'}}
        src={`
          https://near.social/#/embed/eb53ec39ee209676105891c095fcde81fde9671d3155e92da2486c2f6c080c9d/widget/ProfileDev?avatarUrl=${avatarUrl}&login=${login}&followers=${followers.totalCount || 0}&repositories=${repositories.totalCount}&pullRequests=${pullRequests.totalCount}&following=${following.totalCount}&contributions=${contributionsCollection.totalCommitContributions || 0}`}>
      </iframe>
      <LineChart data={commitsData} />
    </>
    // <div style={{ color: ' #fff' }}>
    //   <img src={avatarUrl} alt="avatar" />
    //   <h2>{login}</h2>
    //   <p>Followers: {followers.totalCount}</p>
    //   <p>Following: {following.totalCount}</p>
    //   <p>Repositories: {repositories.totalCount}</p>
    //   <p>Contributions: {contributionsCollection.totalCommitContributions}</p>
    //   <p>Pull Requests: {pullRequests.totalCount}</p>
    //   {/* <p>Funded Projects: {projects.totalCount}</p> */}
    //   <p>Organization: {organizations.nodes[0]?.name || 'None'}</p>
    //   <LineChart data={commitsData} />
    // </div>
  )
}
export default GithubUserInfo
