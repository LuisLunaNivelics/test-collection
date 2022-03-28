pipeline {
 agent any
  stages {    
    stage('Test') { 
      steps {
        sh 'node --version'
        sh 'newman -v'
        sh 'newman run MyCollection.postman_collection.json  -r allure'
      }
    }
  }
}