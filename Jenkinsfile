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
                sh 'lhci --version'
                sh 'lhci autorun --config=./lighthouserc-ci.js'
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