---
sidebar_position: 9
title: "Object Storage"
---

# Object Storage

> **Codename: Tardis** — Infinite Storage. It's bigger on the inside (S3-compatible).

## Overview

A.R.C. uses **MinIO** as its self-hosted, S3-compatible object storage service. Tardis handles file uploads, media storage, model artifacts, and any binary data your agents need to persist beyond the database.

## Ports

| Port | Protocol | Purpose |
|------|----------|---------|
| 9000 | HTTP | S3-compatible API |
| 9001 | HTTP | MinIO Console (Web UI) |

## Configuration

Tardis is included in the base infrastructure and starts with every A.R.C. workspace.

### Environment Variables

```bash
MINIO_ROOT_USER=arc-admin
MINIO_ROOT_PASSWORD=your-secure-password
MINIO_BROWSER=on
```

## Usage

### Accessing the Console

Open `http://localhost:9001` in your browser to access the MinIO Console for visual bucket management.

### S3-Compatible API

MinIO is fully compatible with the AWS S3 API. Use any S3 client:

**Python (boto3):**
```python
import boto3

s3 = boto3.client(
    's3',
    endpoint_url='http://localhost:9000',
    aws_access_key_id='arc-admin',
    aws_secret_access_key='your-secure-password',
)

# Create a bucket
s3.create_bucket(Bucket='agent-artifacts')

# Upload a file
s3.upload_file('model.bin', 'agent-artifacts', 'models/v1/model.bin')

# Download a file
s3.download_file('agent-artifacts', 'models/v1/model.bin', 'local-model.bin')
```

**Go (aws-sdk-go-v2):**
```go
cfg, _ := config.LoadDefaultConfig(context.TODO(),
    config.WithEndpointResolverWithOptions(
        aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
            return aws.Endpoint{URL: "http://localhost:9000"}, nil
        }),
    ),
    config.WithCredentialsProvider(credentials.NewStaticCredentialsProvider("arc-admin", "your-secure-password", "")),
)
client := s3.NewFromConfig(cfg, func(o *s3.Options) { o.UsePathStyle = true })
```

## Best Practices

- **Bucket naming**: Use lowercase, hyphenated names (e.g., `agent-artifacts`, `voice-recordings`)
- **Lifecycle policies**: Configure automatic cleanup for temporary files
- **Access control**: Use MinIO policies to restrict bucket access per service
- **Backups**: MinIO supports server-side replication for disaster recovery

## Health Check

```bash
curl -f http://localhost:9000/minio/health/live
```

## Alternatives

| Alternative | When to Consider |
|------------|-----------------|
| **AWS S3** | Cloud-native deployments with existing AWS infrastructure |
| **Google Cloud Storage** | GCP-based deployments |
| **Azure Blob Storage** | Azure-based deployments |
| **Ceph** | Large-scale on-premises deployments needing distributed storage |

MinIO is the default because it's fully open-source, S3-compatible, and runs anywhere Docker runs.
