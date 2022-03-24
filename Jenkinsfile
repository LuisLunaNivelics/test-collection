pipeline {
  agent any
  stages {
    
    stage('Test') {
      agent {
        docker { image 'node:16-alpine' }
        }
      steps {
        sh 'docker -v'
      }
    }
  }
}