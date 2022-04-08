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
                sh 'lhci --version'
                sh 'npm install lighthouse --save-dev'
                sh 'npm run lighthouse:ci'
                sh 'lighthouse-ci https://www.nmas.com.mx/ --disable-storage-reset --port 51885 --output-path=./report.json --output json'
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