pipeline {
 agent any
  stages {    
    stage('Test') { 
      steps {
        sh 'node --version'
        sh 'npm install'
        sh 'npm -version'
        sh 'newman run MyCollection.postman_collection.json -r allure'
      }
    }
  }
}