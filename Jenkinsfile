pipeline {
  agent any
  stages {
    stage('Performance Testing') {
            steps {
                echo 'Installing k6'
                sh 'sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh 'k6 run loadtests/performance-test.js'
            }
        }
    stage('verify k6') {
      steps {
        script {
          sh 'k6 version'
        }
      }
    }
    stage('run k6 test') {
      steps {
        script {
          sh 'k6 run script.js'
        }
      }
    }
  }
}