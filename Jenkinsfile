pipeline
        {

            options
            {
                // keep last 100 builds
                buildDiscarder(logRotator(numToKeepStr: '100'))

                // add timestamp
                timestamps()
            }
            agent any // run the pipeline on any available node
             stage('SCM: code update')
            {
                    steps
                {
                    // Clean before build
                    cleanWs()
                    script
                    {
                        // checking out repository
                        git branch: 'main', 
                        url: 'https://github.com/LuisLunaNivelics/test-collection'
                    }
                }
            }     
                stage('Docker build')
                {
                    steps
                    {
                        script
                        {
                            // copying and building selenium base
                            docker.build("base-image")
                        }
                    }
                }
                
            }

