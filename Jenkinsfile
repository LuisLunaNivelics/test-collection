pipeline {
    agent any
    tools {NodeJs "node"}
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'node --version'
                sh 'npm install newman'                
            }
        }
    }
}