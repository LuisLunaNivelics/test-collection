pipeline {
 agent any
  stages {    
    stage('Test') { 
      steps {
        sh 'newman run MyCollection.postman_collection.json  -r allure'
      }
    }
  }
}