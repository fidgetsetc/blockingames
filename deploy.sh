#!/bin/bash

# Target directory
TARGET_DIR="/home/scrappy73/Documents/GitHub/blockingames"
DOMAINS_FILE="$TARGET_DIR/domains.txt"

# Check if target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ Error: Directory $TARGET_DIR does not exist."
    exit 1
fi

# CD into the directory
cd "$TARGET_DIR" || exit 1
echo "📁 Switched to directory: $(pwd)"

# Check if domains.txt exists
if [ ! -f "domains.txt" ]; then
    echo "❌ Error: domains.txt not found in $TARGET_DIR"
    exit 1
fi

echo "🚀 Starting deployment to Surge domains..."

# Loop through each line in domains.txt
while IFS= read -r domain || [ -n "$domain" ]; do
    # Trim whitespace and skip empty lines or comments
    domain=$(echo "$domain" | xargs)
    [[ -z "$domain" || "$domain" =~ ^# ]] && continue

    echo "----------------------------------------"
    echo "🌐 Deploying to: $domain"
    echo "----------------------------------------"
    
    # Run surge deployment
    # Note: Current directory '.' is deployed to the specified domain
    surge . "$domain"

    if [ $? -eq 0 ]; then
        echo "✅ Successfully deployed to $domain"
    else
        echo "❌ Failed to deploy to $domain"
    fi
done < "domains.txt"

echo "========================================"
echo "🎉 All deployments completed!"
