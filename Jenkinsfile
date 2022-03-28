pipeline {
    agent {
        docker { image 'grafana/k6:latest' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'k6 --version'
            }
        }
    }
}