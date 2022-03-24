pipeline {
  agent any
  stages {
    stage('Initialize'){
        def dockerHome = tool 'myDocker'
        env.PATH = "${dockerHome}/bin:${env.PATH}"
    }
    stage('Test') {
      agent {
        docker { image 'node:16-alpine' }
        }
      steps {
        sh 'node --version'
      }
    }
  }
}