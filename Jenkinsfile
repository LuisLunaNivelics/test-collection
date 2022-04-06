pipeline {
    agent any
    tools { nodejs 'NodeJs' }
    stages {        
        stage('Performance Testing') {
            steps {     
                // Clean before build
                    cleanWs()           
                sh 'node --version'    
                sh 'npm install newman' 
                sh 'newman run televisa.postman_collection.json'   
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