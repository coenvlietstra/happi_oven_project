import 'package:flutter/material.dart';

InputDecoration loginPageInputDecoration(
  String hint,
  Widget icon,
) {
  return InputDecoration(
    isDense: true,
    hintText: hint,
    prefixIcon: icon,
    border: const OutlineInputBorder(
      borderRadius: BorderRadius.all(
        Radius.circular(10),
      ),
    ),
  );
}
