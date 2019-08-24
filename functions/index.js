const functions = require('firebase-functions')
const admin = require('firebase-admin')

const LINKS_PER_PAGE = 9

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://hacker-news-clone-d96d7.firebaseio.com'
})
const db = admin.firestore()

exports.linkPagination = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let linkRef = db.collection('links')
  const offset = Number(request.query.offset)

  linkRef
    .orderBy('created', 'desc')
    .limit(LINKS_PER_PAGE)
    .offset(offset)
    .get()
    .then(snapshot => {
      const links = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      response.json(links)
    })
})

exports.getTotalLinks = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  db.collection('links')
    .get()
    .then(snapshot => {
      response.json({ length: snapshot.size })
    })
})
