pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Sanjaykumar-2708/sample-node-echo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Build step (optional for Node.js)'
            }
        }

        stage('Test') {
            steps {
                echo 'No tests defined yet'
            }
        }

        stage('Deploy') {
            steps {
                sh 'pm2 restart index.js || pm2 start index.js'
            }
        }
    }
}
