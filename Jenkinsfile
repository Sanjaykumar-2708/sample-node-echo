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
                bat 'start /B node index.js'
            }
       }
       stage('Docker Build & Run') {
    steps {
        bat 'docker stop mynodeapp || exit 0'
        bat 'docker rm mynodeapp || exit 0'
        bat 'docker build -t mynodeapp .'
        bat 'docker run -d -p 3000:3000 --name mynodeapp mynodeapp'
    }
}
    }
}