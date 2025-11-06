#!/bin/bash
# Image optimization script for Jekyll site
# Optimizes large images while maintaining quality

echo "Optimizing images in assets/img/..."

# Optimize PNG files (projects, publication previews)
find assets/img -name "*.png" -type f | while read file; do
    size_before=$(du -h "$file" | cut -f1)
    echo "Optimizing: $file ($size_before)"
    
    # Convert to optimized PNG (reduce quality slightly for large files)
    convert "$file" -strip -quality 85-95 "$file.tmp" 2>/dev/null
    
    # If optimization succeeded and file is smaller, replace
    if [ -f "$file.tmp" ]; then
        size_after=$(du -h "$file.tmp" | cut -f1)
        if [ $(stat -f%z "$file.tmp" 2>/dev/null || stat -c%s "$file.tmp" 2>/dev/null) -lt $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null) ]; then
            mv "$file.tmp" "$file"
            echo "  ✓ Optimized: $size_before → $size_after"
        else
            rm "$file.tmp"
            echo "  - No improvement, keeping original"
        fi
    fi
done

# Optimize JPEG files (photos)
find assets/img -name "*.jpeg" -o -name "*.jpg" -type f | while read file; do
    size_before=$(du -h "$file" | cut -f1)
    echo "Optimizing: $file ($size_before)"
    
    # Use sips for JPEG (better on macOS)
    if command -v sips &> /dev/null; then
        # Create optimized version
        sips -s format jpeg -s formatOptions 85 "$file" --out "$file.tmp" &>/dev/null
        
        if [ -f "$file.tmp" ]; then
            size_after=$(du -h "$file.tmp" | cut -f1)
            if [ $(stat -f%z "$file.tmp" 2>/dev/null || stat -c%s "$file.tmp" 2>/dev/null) -lt $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null) ]; then
                mv "$file.tmp" "$file"
                echo "  ✓ Optimized: $size_before → $size_after"
            else
                rm "$file.tmp"
                echo "  - No improvement, keeping original"
            fi
        fi
    else
        # Fallback to ImageMagick
        convert "$file" -strip -quality 85 "$file.tmp" 2>/dev/null
        if [ -f "$file.tmp" ]; then
            size_after=$(du -h "$file.tmp" | cut -f1)
            if [ $(stat -f%z "$file.tmp" 2>/dev/null || stat -c%s "$file.tmp" 2>/dev/null) -lt $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null) ]; then
                mv "$file.tmp" "$file"
                echo "  ✓ Optimized: $size_before → $size_after"
            else
                rm "$file.tmp"
                echo "  - No improvement, keeping original"
            fi
        fi
    fi
done

echo ""
echo "Optimization complete!"
echo "New folder size:"
du -sh assets/img

