pipeline {
    agent any
    tools { nodejs 'NodeJs' }
    stages {   
        stage('SCM: code update')
            {
                    steps
                {
                    // Clean before build
                    cleanWs()
                    script
                    {
                        // checking out repository
                        git branch: 'main', 
                        url: 'https://github.com/LuisLunaNivelics/test-collection'
                    }
                }
            }     
        stage('Performance Testing') {
            steps {                
                sh 'node --version'    
                sh 'npm install newman' 
                sh 'npm i k6'
                sh 'npm fund'
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