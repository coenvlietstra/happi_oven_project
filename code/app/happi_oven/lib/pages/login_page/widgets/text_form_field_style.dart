import 'package:flutter/material.dart';

InputDecoration loginPageInputDecoration(
  String hint,
  Widget icon,
) {
  return InputDecoration(
    contentPadding: EdgeInsets.zero,
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
