pipeline {
    agent {
        docker { image 'grafana/k6:latest' }
    }
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'k6 version'
                echo 'Installing k6'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh 'k6 run k6-script.js'
            }
        }
    }
}