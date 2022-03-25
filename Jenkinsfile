pipeline {
 agent none
  stages {    
    stage('Test') {      
      agent { docker 'openjdk:7'}
      steps {
        sh 'java -version'
      }
    }
  }
}