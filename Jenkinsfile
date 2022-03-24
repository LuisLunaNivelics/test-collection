pipeline {
  agent any
  stages {    
    stage('Test') {      
      steps {
        sh 'node --version'
        sh 'newman run MyCollection.postman_collection.json -v'
      }
    }
  }
}