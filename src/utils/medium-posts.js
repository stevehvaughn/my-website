export async function loadMediumPosts() {
  const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stevehvaughn')
  const data = await res.json()

  return data
}