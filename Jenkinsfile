pipeline {
    agent any
    stages {        
        stage('Performance Testing') {
            steps nodejs('NodeJs'){
                sh 'node --version'
                sh 'npm install newman'                
            }
        }
    }
}