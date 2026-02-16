# Jicofo – Conference Focus

Built from source.

```bash
git clone https://github.com/jitsi/jicofo.git
mvn clean package -DskipTests
```

```mermaid
graph LR
Prosody --> Jicofo
Jicofo --> JVB
```