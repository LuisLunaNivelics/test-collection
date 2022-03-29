pipeline {
    agent {
        docker { image 'ubuntu:latest' }
    }
    stages {        
        stage('Performance Testing') {
            steps {
                sh 'lsb_release -a'
                echo 'Installing k6'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh 'k6 run k6-script.js'
            }
        }
    }
}