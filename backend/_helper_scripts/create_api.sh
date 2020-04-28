#!/bin/bash

cd './server/api/'

if [ $# -eq 0 ]
  then
    echo "API name not provided!"
    exit -1
fi

API_NAME=$1
echo "Start crating API: $API_NAME folder and files..."

if [ -d "$API_NAME" ]; then
  echo "Folder with $API_NAME already exists"
  exit -2
fi

mkdir $API_NAME
cd $API_NAME

touch index.ts
touch "$API_NAME.controller.ts"
touch "$API_NAME.model.ts"
touch "$API_NAME.resolvers.ts"
touch "$API_NAME.schema.ts"
touch "$API_NAME.service.ts"


# Index
cat > index.ts <<EOF
import ${API_NAME}Schema from "./${API_NAME}.schema";
import ${API_NAME}Resolvers from "./${API_NAME}.resolvers";

export default {
  resolvers: ${API_NAME}Resolvers,
  schema: ${API_NAME}Schema,
};
EOF

# Controller
cat > ${API_NAME}.controller.ts <<EOF
import ${API_NAME}Service from "./${API_NAME}.service";
import { I${API_NAME} } from "./${API_NAME}.model";

export default class ${API_NAME}Controller {}
EOF

# Model
cat > ${API_NAME}.model.ts <<EOF
import { Schema, Document, model } from "mongoose";

const ${API_NAME}Schema = new Schema({});

export interface I${API_NAME} extends Document {}

export default model<I${API_NAME}>("${API_NAME}", ${API_NAME}Schema);

EOF

# Resolvers
cat > ${API_NAME}.resolvers.ts <<EOF
import ${API_NAME}Controller from "./${API_NAME}.controller";

export default {
  Query: {},
  Mutation: {},
};
EOF

# Schema
cat > ${API_NAME}.schema.ts <<EOF
import { gql } from "apollo-server-express";

export default gql\`
  extend type Query {
  }
  extend type Mutation {
  }
\`;
EOF

# Service
cat > ${API_NAME}.service.ts <<EOF
import ${API_NAME}, { I${API_NAME} } from "./${API_NAME}.model";

export default class ${API_NAME}Service {}
EOF

echo 'API ${API_NAME} Successfuly created!'



