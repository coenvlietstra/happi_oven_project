import 'dart:async';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<String> checkTokenAndNavigate(BuildContext context) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();

  await Future.delayed(const Duration(seconds: 3));

  String? token = prefs.getString('toekn');
  if (token != null) {
    return '/home';
  } else {
    return '/login';
  }
}
