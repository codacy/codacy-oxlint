FROM node:lts-alpine3.24
 
RUN addgroup -g 2004 docker && adduser -u 2004 -G docker -s /bin/sh -D docker
 
WORKDIR /app
 
# Install oxlint binary
# We install it globally so it's available at /usr/local/bin/oxlint
COPY .tool_version .
RUN VERSION=$(cat .tool_version) && npm install -g oxlint@"${VERSION}" --ignore-scripts
 
# Copy source files
COPY --chown=docker:docker package.json tsconfig.json entrypoint.sh ./
COPY --chown=docker:docker src/ ./src/
COPY --chown=docker:docker docs/ ./docs/
COPY --chown=docker:docker docs-generator/ ./docs-generator/
 
RUN chmod +x /app/entrypoint.sh
 
# Source code will be mounted at /src at runtime
WORKDIR /src
 
# Run as non-root
USER docker
 
ENTRYPOINT ["/app/entrypoint.sh"]