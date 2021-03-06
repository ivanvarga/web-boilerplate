# deploy.sh
#! /bin/bash

BRANCH=$1
SHA1=$2


# Deploy image to Docker Hub
#docker push ivanvarga/web-boilerplate:latest

# Create new Elastic Beanstalk version
EB_BUCKET=web-boilerplate
DOCKERRUN_FILE=$SHA1-Dockerrun.aws.json

sed "s/<TAG>/$BRANCH/" < Dockerrun.aws.json.template > $DOCKERRUN_FILE
aws s3 cp $DOCKERRUN_FILE s3://$EB_BUCKET/$DOCKERRUN_FILE
aws elasticbeanstalk create-application-version --application-name web-boilerplate \
  --version-label $SHA1 --source-bundle S3Bucket=$EB_BUCKET,S3Key=$DOCKERRUN_FILE

# Update Elastic Beanstalk environment to new version
aws elasticbeanstalk update-environment --environment-name webBoilerplate-env \
    --version-label $SHA1