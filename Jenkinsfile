pipeline {
  agent any
  stages {
    stage('verify k6') {
      steps {
        script {
          sh 'k6 version'
        }
      }
    }
    stage('run k6 test') {
      steps {
        script {
          sh 'k6 run script.js'
        }
      }
    }
  }
}