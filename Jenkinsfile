pipeline {
    agent any
    tools {nodejs "node"}
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'node --version'
                sh 'npm install newman'                
            }
        }
    }
}