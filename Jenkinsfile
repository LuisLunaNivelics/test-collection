pipeline {
    agent any
    tools {
  nodejs 'NodeJs'
    }
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'node --version'    
                sh 'npm install newman' 
                sh 'newman run televisa.postman_collection.json -r allure'          
            }
        }
    }
    post{
            always
                {
                    // Generate Allure Report
                  allure disabled: false, includeProperties: false, jdk: '', results: [[path: 'allure-results']]
                }
        }
}