pipeline {
 agent none
  stages {    
    stage('Test') {      
      agent { docker {image 'openjdk:7'}}
      steps {
        sh 'java -version'
      }
    }
  }
}