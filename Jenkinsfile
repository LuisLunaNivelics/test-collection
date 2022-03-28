pipeline {
 agent any
  stages {    
    stage('Test') { 
      steps {
        sh 'node --version'
        sh 'npm install -g newman'
        sh 'newman run MyCollection.postman_collection.json  -r allure'
      }
    }
  }
}