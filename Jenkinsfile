pipeline {
  agent any
  stages {
    stage('run collection') {
      steps {
        sh 'docker run -t postman/newman run -h'
        sh 'docker run -v ${WORKSPACE}:/etc/newman --workdir /etc/newman -t postman/newman run Mycollection.postman_collection.json --color off --disable-unicode'
      }
    }
  }
}