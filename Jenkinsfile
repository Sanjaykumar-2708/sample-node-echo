pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Sanjaykumar-2708/sample-node-echo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step here'
            }
        }

        stage('Test') {
            steps {
                 echo 'Skipping tests for now'
              }
        }


        stage('Deploy') {
            steps {
                bat 'node index.js'
            }
       }

    }
}
