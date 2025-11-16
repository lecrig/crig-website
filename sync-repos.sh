#!/bin/bash
# Script de synchronisation des repositories
# Push vers le repository personnel et le repository du club

echo "Pushing to personal repository (origin)..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✓ Successfully pushed to personal repository"
    echo ""
    echo "Pushing to club repository (club)..."
    git push club main
    
    if [ $? -eq 0 ]; then
        echo "✓ Successfully pushed to club repository"
        echo ""
        echo "✓ Both repositories are now synchronized!"
    else
        echo "✗ Failed to push to club repository. Check your permissions."
    fi
else
    echo "✗ Failed to push to personal repository."
fi


