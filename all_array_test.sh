#! /bin/bash
all_test_dir="./tests/"
all_test_files=$(ls $all_test_dir)



for filename in $all_test_files

do 
  node $all_test_dir/$all_test_files

  echo "=============="$filename "passed"==============

done
