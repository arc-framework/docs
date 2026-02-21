---
sidebar_position: 10
title: "Vector Search"
---

# Vector Search

> **Codename: Cerebro** — The Finder. Connects to every thought to find semantic matches.

## Overview

A.R.C. uses **Qdrant** as its vector database for semantic search, embeddings storage, and similarity matching. Cerebro powers the RAG (Retrieval-Augmented Generation) capabilities of Sherlock (the reasoning engine), enabling agents to find relevant context from large knowledge bases.

## Ports

| Port | Protocol | Purpose |
|------|----------|---------|
| 6333 | HTTP | REST API |
| 6334 | gRPC | High-performance gRPC API |

## Configuration

Cerebro is included in the base infrastructure and starts with every A.R.C. workspace.

### Environment Variables

```bash
QDRANT_HOST=arc-db-vector
QDRANT_PORT=6333
QDRANT_GRPC_PORT=6334
```

## Usage

### REST API

```bash
# Check collection info
curl http://localhost:6333/collections

# Create a collection
curl -X PUT http://localhost:6333/collections/knowledge \
  -H 'Content-Type: application/json' \
  -d '{
    "vectors": {
      "size": 1536,
      "distance": "Cosine"
    }
  }'
```

### Python Client

```python
from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct

client = QdrantClient(host="localhost", port=6333)

# Create a collection
client.create_collection(
    collection_name="knowledge",
    vectors_config=VectorParams(size=1536, distance=Distance.COSINE),
)

# Insert vectors
client.upsert(
    collection_name="knowledge",
    points=[
        PointStruct(id=1, vector=[0.1] * 1536, payload={"text": "A.R.C. documentation"}),
        PointStruct(id=2, vector=[0.2] * 1536, payload={"text": "Platform architecture"}),
    ],
)

# Search
results = client.search(
    collection_name="knowledge",
    query_vector=[0.15] * 1536,
    limit=5,
)
```

## Integration with Sherlock

Cerebro integrates directly with Sherlock (the reasoning engine) for RAG workflows:

1. **Ingest**: Documents are embedded and stored in Cerebro
2. **Query**: Sherlock sends a query vector to Cerebro
3. **Retrieve**: Cerebro returns the most semantically similar documents
4. **Reason**: Sherlock uses the retrieved context to generate grounded responses

## Best Practices

- **Collection design**: One collection per knowledge domain (e.g., `docs`, `code`, `conversations`)
- **Embedding model**: Use consistent embedding dimensions (1536 for OpenAI, 768 for many open-source models)
- **Payload indexing**: Index frequently filtered fields for faster queries
- **Snapshots**: Use Qdrant's snapshot feature for backups

## Health Check

```bash
curl http://localhost:6333/healthz
```

## Alternatives

| Alternative | When to Consider |
|------------|-----------------|
| **Pinecone** | Managed vector DB with serverless scaling |
| **Weaviate** | When you need built-in vectorization |
| **Milvus** | Large-scale distributed vector search |
| **pgvector** | When you want vectors in PostgreSQL (already available via Oracle) |
| **Elasticsearch** | When you need both full-text and vector search |

Qdrant is the default because it's purpose-built for vector search, open-source, and highly performant with low resource usage.

---

**Note:** Full-text search via Elasticsearch or OpenSearch is planned for a future release. Currently, semantic search via Cerebro covers most agent retrieval needs.
