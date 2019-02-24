pipeline{
    // environment{ 
    //         // def file = readFile("${env.WORKSPACE}/JF.conf");
    //         // def repoName = file.split('repo:');
    //         // def repo = repoName[1].split(';')[0].trim();
    //         // def port = file.split('port:');
    //         // def repoPort = port[1].split(';')[0].trim();
    //         // def slave = file.split('slave:');
    //         // def repoSecondPort = slave[1].split(';')[0].trim();  
    //         // def user = file.split('keyUser:');
    //         // def keyUser = user[1].split(';')[0].trim();   
    //         // def pass = file.split('keyPass:');
    //         // def keyPass = pass[1].split(';')[0].trim();  
    //         // def network = file.split('networkName:');
    //         // def networkName = network[1].split(';')[0].trim();   
    //         // def tempDockerImageName = "luayskar/temp-${repo}-image";
    //         // def officialDockerImageName = "luayskar/official-${repo}-image"; 
    //         // def tempDockerContainerName = "temp-${repo}-cont";
    //         // def officialDockerContainerName = "${repo}-dev-cont";    
    //         // def tagName = "${BUILD_TAG}"; 


    //     }
 post {
 always {
   sh 'echo "This will always run"'
 }
 success {
  sh 'echo "This will run only if success"'
 }
 failure {
  sh 'echo "This will run only if failed"'
 }
 unstable {
  sh 'echo "This will run only if the run was marked as unstable"'
 }
 changed {
  sh 'echo "This will run only if the state of the Pipeline has changed"'
  sh 'echo "For example, the Pipeline was previously failing but is now successful"'
  sh 'echo "... or the other way around :)"'
 }
}
    agent any
    stages  {
        stage{
            echo "test"
        }
        // stage('Build Temp Docker - B') { 
        //     steps {
        //         //    sh 'docker login -u="${keyUser}" -p="${keyPass}"'
        //         //    echo "repo : ${repo} .... repoPort : ${repoPort} .... keyUser : ${keyUser} .... keyPass : ${keyPass} .... networkName : ${networkName} .... tag : ${tagName}"
  
        //         //    //check the network exists and create it
        //         //    sh "docker network create ${networkName} || true"
        //         //    //craete the docker image  
        //         //    sh "docker build --network ${networkName} --tag ${tempDockerImageName}:latest ." 
        //         //    sh "docker build --network ${networkName} --tag ${tempDockerImageName}:${tagName} ." 
        //            echo "docker image ${tempDockerImageName} within network ${networkName} created successfully" 
                   
        //     }
        // }
        // stage('Docker Integration - C') { 
        //     steps {  
        //         script {
        //                  try{
        //                     //    sh "docker kill ${tempDockerContainerName}"
        //                     //    sh "docker rm ${tempDockerContainerName}" 
        //                     //    echo "docker ${tempDockerContainerName} deleteded successfully"
        //                  }  
        //                 catch (exc) {
        //                     echo "${tempDockerContainerName} is ready to build "
        //                  }
        //                  try{ 
        //                 //    sh "docker run -d --network ${networkName} --name ${tempDockerContainerName} -p ${repoPort}:${repoSecondPort} ${tempDockerImageName}:latest"
        //                    echo "docker container ${tempDockerContainerName} within network ${networkName} created successfully"            
                         
        //                  }
        //                  catch (exc){ 
        //                      try{
        //                             echo "${tempDockerContainerName} is roleback to previous version "
        //                             // sh "docker pull ${tempDockerImageName}:latest"
        //                        }catch(ex){
        //                             echo "${tempDockerContainerName} have no previous version " 
        //                      }

        //                  } 
        //             }
        //     }
        // }  
        // stage('Unit Test - D') { 
        //     steps {
        //         echo "Unit Test - D"
        //     }
        // }
        // stage('UI Test - E') { 
        //     steps {
        //         echo "UI Test - E"
        //     }
        // }
        
        // stage('Build Official Docker - G') { 
        //     steps {     
        //            //craete the docker image  
        //         //    sh "docker build --network ${networkName} --tag ${officialDockerImageName}:latest ." 
        //         //    sh "docker build --network ${networkName} --tag ${officialDockerImageName}:${tagName} ." 
        //            echo "docker image ${officialDockerImageName} within network ${networkName} created successfully"              
        //     }
        // }
        // stage('Create Official Docker - H') { 
        //   steps {  
        //         script {
        //                  try{ 
        //                     //    sh "docker kill ${tempDockerContainerName}"
        //                     //    sh "docker rm ${tempDockerContainerName}" 
        //                     //    sh "docker kill ${officialDockerContainerName}" 
        //                        echo "docker ${officialDockerContainerName} deleteded successfully"
        //                     }  
        //                     catch(exc)
        //                         {
        //                             try{
        //                                 //    sh "docker rm ${tempDockerContainerName}" 
        //                                 //    sh "docker kill ${officialDockerContainerName}" 
        //                                 //    sh "docker rm ${officialDockerContainerName}" 
        //                                    echo "docker ${officialDockerContainerName} deleteded successfully"
        //                                }
        //                     catch(ex)
        //                     {
        //                         try{
        //                             //  sh "docker rm ${officialDockerContainerName}" 
        //                              echo "docker ${officialDockerContainerName} deleteded successfully"
        //                             }
        //                         catch(err)
        //                         {
        //                         }
        //                     }
        //                     echo "${officialDockerContainerName} is ready to build "
        //                  }
        //                  try{ 
        //                 //    sh "docker run -d --network ${networkName} --name ${officialDockerContainerName} -p ${repoPort}:${repoSecondPort} ${officialDockerImageName}:latest"
        //                    echo "docker container ${officialDockerContainerName}:latest within network ${networkName} created successfully"            
                         
        //                  }
        //                  catch (exc){ 
        //                      try{
        //                             // echo "${officialDockerContainerName} is roleback to previous version "
        //                             sh "docker pull ${officialDockerImageName}:latest"
        //                      }
        //                       catch(ex){
        //                             echo "${officialDockerContainerName} have no previous version " 
        //                           }
        //                      }
        //                  } 
        //             }  
        // } 
       
    } 
}