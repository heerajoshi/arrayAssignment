#! /bin/bash
all_test_dir="./tests/"
all_test_files=$(ls $all_test_dir)

set -e

for filename in $all_test_files

do 
  node $all_test_dir/$filename

  echo "=============="$filename "passed"==============

done
