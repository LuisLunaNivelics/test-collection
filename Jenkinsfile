pipeline {
  agent any
  stages {
    stage('verify k6') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
          sh 'k6 version'
        }
      }
    }
    stage('run k6 test') {
      steps {
        withEnv(['PATH+EXTRA=/usr/sbin:/usr/bin:/sbin:/bin']) {
          sh 'k6 run script.js'
        }
      }
    }
  }
}