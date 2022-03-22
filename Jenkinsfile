pipeline {
  agent any
  stages {
    stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'winget install k6'
            }
        }
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