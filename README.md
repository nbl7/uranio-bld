### Workflow CI/CD

For each `push` to `master` a new Github Action starts with the following jobs:

#### JOB 1 (Push to registry)

At the moment the Docker Registry is on GitLab.

- Login to Docker registry (uses an external Docker action)
	- Environment variables:
		- `REGISRY` [ registry.gitlab.com ]
		- `REGISTRY_USERNAME` [ x71c9 ]
	- Secrets:
		- `GITLAB_PERSONAL_ACCESS_TOKEN` [ glpat-... ]
		(Generated on Gitlab > Preferences > Access Tokens)

- Configure SSH key for donwloading private repos from Github (uses an external action)
	- Secrets:
		- `GH_PRIVATE_KEY` (This is a custom generated private key; the public key
		is hosted on Github > Settings > SSH keys)
		> Secrets cannot starts with `GITHUB_`

- Install Uranio globally on the machine
	- `yarn global add uranio`

- Set SHA from commit on a step variable
	- `echo "::set-output name=sha_short::$(git rev-parse --short HEAD)"`

- Init Uranio - This creates the docker image with the repository file.
	- `uranio init -uf --prod --docker --repo=adm`

- Push the image to the Registry with Uranio
	- `uranio docker push --docker_tag ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}:${{ steps.vars.outputs.sha_short }}`
	- Environment variables:
		- `REGISTRY` [ registry.gitlab.com ]
		- `IMAGE_NAME` [ uranio/uranio-bld ]

#### JOB 2 (Update the container on Amazon EC2)

- Add AWS EC2 host to `known_hosts` on the curent machine
	- Secrets:
		- `AWS_HOST` [ ec2-**-**-**-**.eu-south-1.compute.amazonaws.com ]

- Login and run `upadate_container.sh` on AWS EC2
	- Environmental variables:
		- `GITLAB_PROJECT_ID` [ 38562332 ]
		- `REGISRY` [ registry.gitlab.com ]
		- `IMAGE_NAME` [ uranio/uranio-bld ]
	- Secrets:
		- `AWS_PRIVATE_KEY`
		(Generated on AWS > EC2 > Network & Security > Key Pairs)
		- `GITLAB_PERSONAL_ACCESS_TOKEN` [ glpat-... ]
		(Generated on Gitlab > Preferences > Access Tokens)
		- `AWS_HOST` [ ec2-**-**-**-**.eu-south-1.compute.amazonaws.com ]

The last job run a script inside AWS EC2, the script do the following:
	- `docker system prune -af` -> delete all docker cache. The machine has small storage.
	- `docker stop [container name]` -> stop the running container
	- `docker rm [cotainer_name]` -> remove the stopped container
	- `docker run ...` -> download the new image and run a new container

In order for the last command to work the public key must be added on EC2,
so it must be listed in EC2 `~/.ssh/authorized_keys`

The public key can be extracted from the private key with the following command:
```
ssh-keygen -y -f <path_to_private_key>
```


