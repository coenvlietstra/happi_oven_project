import 'package:flutter/material.dart';
import 'package:happi_oven/pages/login_page/widgets/text_form_field_style.dart';

enum KeyboardType {
  text,
  number,
  emailAddress,
  phone,
  url,
  datetime,
  multiline,
}

TextInputType _getKeyboardType(KeyboardType keyboardType) {
  switch (keyboardType) {
    case KeyboardType.text:
      return TextInputType.text;
    case KeyboardType.number:
      return TextInputType.number;
    case KeyboardType.emailAddress:
      return TextInputType.emailAddress;
    case KeyboardType.phone:
      return TextInputType.phone;
    case KeyboardType.url:
      return TextInputType.url;
    case KeyboardType.datetime:
      return TextInputType.datetime;
    case KeyboardType.multiline:
      return TextInputType.multiline;
    default:
      return TextInputType.text;
  }
}

Padding loginPageTextFormField(
    double verticalPadding,
    double horizontalPadding,
    TextEditingController controller,
    bool passwordField,
    String hintText,
    IconData prefixIcon,
    KeyboardType keyboardType,
    [Function(bool)? passwordFieldToggle]) {
  Widget prefixWidget;
  if (passwordField) {
    prefixWidget = Icon(
      passwordField ? Icons.lock_open : Icons.lock_open,
    );
  } else {
    prefixWidget = Icon(prefixIcon);
  }

  if (passwordFieldToggle != null) {
    prefixWidget = IconButton(
      icon: prefixWidget,
      onPressed: () {
        passwordFieldToggle(!passwordField);
      },
    );
  }

  return Padding(
    padding: EdgeInsets.symmetric(
      vertical: verticalPadding,
      horizontal: horizontalPadding,
    ),
    child: TextFormField(
      controller: controller,
      obscureText: passwordField,
      keyboardType: _getKeyboardType(keyboardType),
      decoration: loginPageInputDecoration(
        hintText,
        prefixWidget,
      ),
    ),
  );
}
