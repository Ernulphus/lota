#!/bin/sh

# Usage: ./setupComponent -n ExampleNewComponent

# Reset in case getopts has been used previously in the shell.
OPTIND=1

# Initialize our own variables:
dirname=""

while getopts "n:" opt; do
  case "$opt" in
    n)  dirname=$OPTARG
      ;;
  esac
done

shift $((OPTIND-1))

[ "${1:-}" = "--" ] && shift

echo "dirname='$dirname', Leftovers: $@"

mkdir $dirname
cd $dirname
touch ${dirname}.jsx ${dirname}.test.js ${dirname}.css
echo "import './"${dirname}".css'" >> ${dirname}.jsx
cd ..
