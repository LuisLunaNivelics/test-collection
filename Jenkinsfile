pipeline {
  try agent {any{image 'grafana/k6:latest'}}
  stages {    
    stage('Test') {      
      steps {
        sh 'node --version'
        sh 'k6 -v'
      }
    }
  }
}