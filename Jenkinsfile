pipeline {
    agent any
    tools {
  nodejs 'NodeJs'
    }
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'node --version'
                sh 'npm install'      
                sh 'npm install newman'           
            }
        }
    }
}